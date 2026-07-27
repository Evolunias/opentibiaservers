import NewNilotOtKeywordPage, { generateMetadata } from './new-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNilotOtKeywordPage />;
}
