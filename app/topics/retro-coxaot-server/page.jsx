import RetroCoxaotServerKeywordPage, { generateMetadata } from './retro-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroCoxaotServerKeywordPage />;
}
