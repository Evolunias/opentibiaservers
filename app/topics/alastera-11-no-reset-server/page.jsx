import Alastera11NoResetServerKeywordPage, { generateMetadata } from './alastera-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11NoResetServerKeywordPage />;
}
