import ThorniaLoginKeywordPage, { generateMetadata } from './thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaLoginKeywordPage />;
}
