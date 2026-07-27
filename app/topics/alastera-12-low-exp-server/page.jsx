import Alastera12LowExpServerKeywordPage, { generateMetadata } from './alastera-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12LowExpServerKeywordPage />;
}
