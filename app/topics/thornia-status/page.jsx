import ThorniaStatusKeywordPage, { generateMetadata } from './thornia-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaStatusKeywordPage />;
}
