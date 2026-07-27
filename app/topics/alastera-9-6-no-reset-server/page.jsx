import Alastera96NoResetServerKeywordPage, { generateMetadata } from './alastera-9-6-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96NoResetServerKeywordPage />;
}
