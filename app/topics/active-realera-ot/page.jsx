import ActiveRealeraOtKeywordPage, { generateMetadata } from './active-realera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraOtKeywordPage />;
}
