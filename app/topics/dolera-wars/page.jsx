import DoleraWarsKeywordPage, { generateMetadata } from './dolera-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraWarsKeywordPage />;
}
