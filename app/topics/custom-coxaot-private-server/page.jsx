import CustomCoxaotPrivateServerKeywordPage, { generateMetadata } from './custom-coxaot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotPrivateServerKeywordPage />;
}
