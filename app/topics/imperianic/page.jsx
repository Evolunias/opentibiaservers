import ImperianicKeywordPage, { generateMetadata } from './imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicKeywordPage />;
}
