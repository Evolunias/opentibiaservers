import Alastera86LowExpServerKeywordPage, { generateMetadata } from './alastera-8-6-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86LowExpServerKeywordPage />;
}
