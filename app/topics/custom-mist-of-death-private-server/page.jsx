import CustomMistOfDeathPrivateServerKeywordPage, { generateMetadata } from './custom-mist-of-death-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathPrivateServerKeywordPage />;
}
