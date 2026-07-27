import CustomEvoluniaPrivateServerKeywordPage, { generateMetadata } from './custom-evolunia-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEvoluniaPrivateServerKeywordPage />;
}
