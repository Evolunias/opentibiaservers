import NewElderaRulesKeywordPage, { generateMetadata } from './new-eldera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewElderaRulesKeywordPage />;
}
