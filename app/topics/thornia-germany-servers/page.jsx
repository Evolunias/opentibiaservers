import ThorniaGermanyServersKeywordPage, { generateMetadata } from './thornia-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaGermanyServersKeywordPage />;
}
