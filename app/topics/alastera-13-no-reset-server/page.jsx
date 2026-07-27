import Alastera13NoResetServerKeywordPage, { generateMetadata } from './alastera-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13NoResetServerKeywordPage />;
}
