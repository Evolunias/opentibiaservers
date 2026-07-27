import NilotResetKeywordPage, { generateMetadata } from './nilot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotResetKeywordPage />;
}
