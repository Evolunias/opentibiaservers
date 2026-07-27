import CurrentRealeraClientKeywordPage, { generateMetadata } from './current-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraClientKeywordPage />;
}
