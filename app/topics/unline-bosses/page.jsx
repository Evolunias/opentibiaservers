import UnlineBossesKeywordPage, { generateMetadata } from './unline-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineBossesKeywordPage />;
}
