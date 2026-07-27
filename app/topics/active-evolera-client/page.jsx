import ActiveEvoleraClientKeywordPage, { generateMetadata } from './active-evolera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraClientKeywordPage />;
}
