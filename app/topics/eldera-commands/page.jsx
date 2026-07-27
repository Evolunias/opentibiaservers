import ElderaCommandsKeywordPage, { generateMetadata } from './eldera-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaCommandsKeywordPage />;
}
