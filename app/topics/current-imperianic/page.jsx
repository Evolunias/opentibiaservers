import CurrentImperianicKeywordPage, { generateMetadata } from './current-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicKeywordPage />;
}
