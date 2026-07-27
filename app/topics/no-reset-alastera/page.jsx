import NoResetAlasteraKeywordPage, { generateMetadata } from './no-reset-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAlasteraKeywordPage />;
}
