import Alastera12NoResetServerKeywordPage, { generateMetadata } from './alastera-12-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12NoResetServerKeywordPage />;
}
