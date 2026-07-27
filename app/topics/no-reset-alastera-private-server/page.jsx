import NoResetAlasteraPrivateServerKeywordPage, { generateMetadata } from './no-reset-alastera-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraPrivateServerKeywordPage />;
}
