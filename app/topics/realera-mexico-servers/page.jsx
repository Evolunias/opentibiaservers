import RealeraMexicoServersKeywordPage, { generateMetadata } from './realera-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraMexicoServersKeywordPage />;
}
