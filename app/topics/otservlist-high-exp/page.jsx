import OtservlistHighExpKeywordPage, { generateMetadata } from './otservlist-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistHighExpKeywordPage />;
}
