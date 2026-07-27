import ImperianicHighExpKeywordPage, { generateMetadata } from './imperianic-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicHighExpKeywordPage />;
}
