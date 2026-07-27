import ThorniaKeywordPage, { generateMetadata } from './thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaKeywordPage />;
}
