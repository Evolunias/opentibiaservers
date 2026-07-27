import Alastera11LowExpServerKeywordPage, { generateMetadata } from './alastera-11-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11LowExpServerKeywordPage />;
}
