import ActiveDemolidoresOtKeywordPage, { generateMetadata } from './active-demolidores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresOtKeywordPage />;
}
