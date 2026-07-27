import ActiveDemolidoresServerKeywordPage, { generateMetadata } from './active-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresServerKeywordPage />;
}
