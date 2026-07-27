import ActiveNilotOtKeywordPage, { generateMetadata } from './active-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotOtKeywordPage />;
}
