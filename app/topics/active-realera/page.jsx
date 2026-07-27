import ActiveRealeraKeywordPage, { generateMetadata } from './active-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealeraKeywordPage />;
}
