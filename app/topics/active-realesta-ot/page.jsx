import ActiveRealestaOtKeywordPage, { generateMetadata } from './active-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaOtKeywordPage />;
}
