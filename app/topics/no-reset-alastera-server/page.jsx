import NoResetAlasteraServerKeywordPage, { generateMetadata } from './no-reset-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraServerKeywordPage />;
}
