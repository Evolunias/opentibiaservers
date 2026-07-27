import ActiveDemolidoresClientKeywordPage, { generateMetadata } from './active-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresClientKeywordPage />;
}
