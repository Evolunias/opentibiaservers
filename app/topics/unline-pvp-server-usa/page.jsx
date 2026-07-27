import UnlinePvpServerUsaKeywordPage, { generateMetadata } from './unline-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlinePvpServerUsaKeywordPage />;
}
