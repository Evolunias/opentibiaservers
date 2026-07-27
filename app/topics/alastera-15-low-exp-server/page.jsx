import Alastera15LowExpServerKeywordPage, { generateMetadata } from './alastera-15-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15LowExpServerKeywordPage />;
}
