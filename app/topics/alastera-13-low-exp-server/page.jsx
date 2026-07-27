import Alastera13LowExpServerKeywordPage, { generateMetadata } from './alastera-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13LowExpServerKeywordPage />;
}
