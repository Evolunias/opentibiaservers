import UnlineTibiaKeywordPage, { generateMetadata } from './unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineTibiaKeywordPage />;
}
