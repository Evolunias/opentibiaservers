import LowExpDuraOnlineServerKeywordPage, { generateMetadata } from './low-exp-dura-online-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpDuraOnlineServerKeywordPage />;
}
