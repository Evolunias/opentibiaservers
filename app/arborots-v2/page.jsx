import ArborotsV2Page, { generateMetadata } from './arborots-v2';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArborotsV2Page />;
}
