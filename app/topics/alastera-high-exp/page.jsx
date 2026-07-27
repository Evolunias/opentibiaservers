import AlasteraHighExpKeywordPage, { generateMetadata } from './alastera-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraHighExpKeywordPage />;
}
