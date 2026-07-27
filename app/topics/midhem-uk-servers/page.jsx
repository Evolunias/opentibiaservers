import MidhemUkServersKeywordPage, { generateMetadata } from './midhem-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemUkServersKeywordPage />;
}
