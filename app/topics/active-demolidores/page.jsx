import ActiveDemolidoresKeywordPage, { generateMetadata } from './active-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresKeywordPage />;
}
