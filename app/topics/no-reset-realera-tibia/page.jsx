import NoResetRealeraTibiaKeywordPage, { generateMetadata } from './no-reset-realera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraTibiaKeywordPage />;
}
