import MidhemCommandsKeywordPage, { generateMetadata } from './midhem-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemCommandsKeywordPage />;
}
