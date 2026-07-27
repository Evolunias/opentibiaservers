import RubinotHighExpKeywordPage, { generateMetadata } from './rubinot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotHighExpKeywordPage />;
}
