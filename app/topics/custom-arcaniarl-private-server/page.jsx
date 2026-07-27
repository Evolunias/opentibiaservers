import CustomArcaniarlPrivateServerKeywordPage, { generateMetadata } from './custom-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArcaniarlPrivateServerKeywordPage />;
}
