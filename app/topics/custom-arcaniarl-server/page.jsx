import CustomArcaniarlServerKeywordPage, { generateMetadata } from './custom-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlServerKeywordPage />;
}
