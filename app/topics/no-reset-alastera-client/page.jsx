import NoResetAlasteraClientKeywordPage, { generateMetadata } from './no-reset-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraClientKeywordPage />;
}
